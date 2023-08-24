<!DOCTYPE html>
<html>

<head>
    <title>Product Management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <link rel="stylesheet" href="main.css">
</head>

<body>
    <main class="container">
        <h1 class="mt-5 d-flex justify-content-between align-items-center">Products
            <span>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                    ADD PRODUCT
                </button>
            </span>
        </h1>
        <!-- Add Product Modal -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel">Add Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form" method="POST" id="productForm" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="name">Product Name</label>
                                <input type="text" class="form-control" name="name" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="unit">Unit</label>
                                <input type="text" class="form-control" name="unit" id="unit" required>
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" class="form-control" name="price" id="price" step=".01" required>
                            </div>
                            <div class="form-group">
                                <label for="expiry">Expiry Date</label>
                                <input type="date" class="form-control" name="expiry" id="expiry" required>
                            </div>
                            <div class="form-group">
                                <label for="inventory">Inventory</label>
                                <input type="number" class="form-control" name="inventory" id="inventory" required>
                            </div>
                            <div class="form-group">
                                <label for="image_path">Image</label>
                                <input type="file" class="form-control" name="image_path" id="image_path" required>
                            </div>
                            <div class="form-group d-flex justify-content-end mt-3">
                                <input type="submit" class="btn btn-primary"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Product Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Edit Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form" method="POST" id="editProductForm">
                            <div class="form-group">
                                <label for="editName">Product Name</label>
                                <input type="text" class="form-control" name="name" id="editName" required>
                            </div>
                            <div class="form-group">
                                <label for="editUnit">Unit</label>
                                <input type="text" class="form-control" name="unit" id="editUnit" required>
                            </div>
                            <div class="form-group">
                                <label for="editPrice">Price</label>
                                <input type="number" class="form-control" name="price" id="editPrice" step=".01"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="editExpiry">Expiry Date</label>
                                <input type="date" class="form-control" name="expiry" id="editExpiry" required>
                            </div>
                            <div class="form-group">
                                <label for="editInventory">Inventory</label>
                                <input type="number" class="form-control" name="inventory" id="editInventory" required>
                            </div>
                            <div class="form-group d-flex justify-content-end mt-3">
                                <input type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                                    value="Save Changes">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <!-- Card Container -->
        <div id="productCardContainer"
            class="d-flex flex-wrap sm-space-between justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-2">
            <!-- Your product cards here -->
        </div>


    </main>

    <!-- JavaScripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>