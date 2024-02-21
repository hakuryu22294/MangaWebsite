import DashboardMenu from "./DashBoardComponent";

const FormComponent = {
  render: () => {
    return `
        ${DashboardMenu.render({ selected: "" })}
        <div class="form-container d-flex align-items-center" style="height: 100vh">
            <div class="container p-3">
                <h3>Add New Book</h3>
                <form id="form-admin" enctype="multipart/form-data" class="form-group">
                    <div class="mb-3">
                        <label for="" class="form-label">Book Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Part</label>
                        <input type="text" class="form-control" id="part" name="part" placeholder="">
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Type</label>
                        <select class="form-select" id="type" name="type">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01" >Categories</label>
                            <select class="form-select" id="categories" name="categories" multiple>
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="image" name="image" placeholder=""> 
                        
                    </div>                    
                </form>
            </div>
        </div>
        `;
  },
};

export default FormComponent;
