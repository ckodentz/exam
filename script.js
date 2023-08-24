$(document).ready(function () {
    var editingProductId = null;

    // Function to fetch and display all products
    function showProducts() {
        $.ajax({
            url: "process.php",
            type: "GET",
            data: { action: "viewProducts" },
            dataType: "json",
            success: function (data) {
                updateProducts(data);
            },
            error: function (error) {
                console.error("Error fetching data:", error);
            },
        });
    }

    // Function to update the cards with fetched data
    function updateProducts(data) {
        var productCardContainer = $("#productCardContainer");
        productCardContainer.empty();

        data.forEach(function (product) {
            var card = `
                <div class="card d-flex flex-column mb-4">
                    <img 
                        src="${product.image_path}" 
                        class="card-img-top" 
                        alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${product.name}</h5>
                        <p class="card-text">Unit: ${product.unit}</p>
                        <p class="card-text">Price: ${product.price}</p>
                        <p class="card-text">Expiration Date: ${
                            product.expiry
                        }</p>
                        <p class="card-text">Inventory: ${product.inventory}</p>
                        <p class="card-text">Total: ${
                            product.inventory * product.price
                        }</p>
                        <div class="d-flex justify-content-between">
                        <button class="btn btn-primary edit-button" data-id="${
                            product.id
                        }" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                            <button class="btn btn-danger delete-button" data-id="${
                                product.id
                            }">Delete</button>
                        </div>
                    </div>
                </div>`;
            productCardContainer.append(card);
        });
    }

    function updateProduct(updatedData) {
        console.log(updatedData);
        $.ajax({
            type: "POST",
            url: "process.php",
            data: {
                action: "updateProduct",
                productId: editingProductId,
                updatedData: updatedData,
            },
            success: function (response) {
                // Refresh the table after successful update
                showProducts();
                // Close the edit modal
                $("#editModal").modal("hide");
            },
            error: function (error) {
                console.error("Error updating product:", error);
            },
        });
    }

    // Function to delete a product
    function deleteProduct(productId) {
        $.ajax({
            type: "DELETE",
            url: "process.php",
            data: {
                action: "deleteProduct",
                productId: productId,
            },
            success: function (response) {
                // Refresh the table after successful deletion
                showProducts();
            },
            error: function (error) {
                console.error("Error deleting product:", error);
            },
        });
    }

    // Function to get a product
    function fetchProductDetails(productId) {
        editingProductId = productId;
        $.ajax({
            url: "process.php",
            type: "GET",
            data: { action: "getProductDetails", productId: productId },
            dataType: "json",
            success: function (product) {
                // Populate the edit form fields with the fetched data
                $("#editName").val(product.name);
                $("#editUnit").val(product.unit);
                $("#editPrice").val(product.price);
                // Format the date before populating the input field
                var expiryDate = new Date(product.expiry);
                var formattedExpiry = expiryDate.toISOString().split("T")[0];
                $("#editExpiry").val(formattedExpiry);
                $("#editInventory").val(product.inventory);
                $("#imagePathDisplay").text(product.image_path);
                // Show the edit modal
                $("#editModal").modal("show");
            },
            error: function (error) {
                console.error("Error fetching product details:", error);
            },
        });
    }

    // ---------------- END OF FUNCTIONS ---------------- //

    // ---------------- START OF ONCLICKS ---------------- //
    // Event delegation for delete buttons
    $(document).on("click", ".delete-button", function () {
        var productId = $(this).data("id");
        // Confirm the deletion with the user
        if (confirm("Are you sure you want to delete this product?")) {
            // Call the deleteProduct function with the productId
            deleteProduct(productId);
        }
    });

    $(document).on("click", ".edit-button", function () {
        var productId = $(this).data("id");
        // Fetch the product details using AJAX and populate the edit modal form
        fetchProductDetails(productId);
    });
    // ---------------- END OF ONCLICKS ---------------- //

    // ---------------- START OF SUBMITS ---------------- //
    $("#productForm").submit(function (event) {
        event.preventDefault();

        // Create a new FormData object
        var formData = new FormData(this);
        formData.append("action", "addProduct");

        $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                console.log(response);
                // Refresh the table to show the new data after successful addition
                showProducts();
                $("#addModal").modal("hide");
            },
            error: function (error) {
                console.error("Error adding product:", error);
            },
        });
    });

    // Handle the submission of the edit form
    $("#editProductForm").submit(function (event) {
        event.preventDefault();

        var updatedData = {
            name: $("#editName").val(),
            unit: $("#editUnit").val(),
            price: $("#editPrice").val(),
            expiry: $("#editExpiry").val(),
            inventory: $("#editInventory").val(),
        };

        // Use the stored productId from fetchProductDetails
        updateProduct(updatedData);
    });
    // ---------------- END OF SUBMITS ---------------- //

    // Fetch and display data when the page loads
    showProducts();
});
