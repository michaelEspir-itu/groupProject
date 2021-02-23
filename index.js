class Bake {
    constructor(name){
        this.name = name;
        this.cake =[];
    }
    addBake(flavor,size,shape,price){
        this.bake.push(new Cake(flavor,size,shape,price));
    }
}

class Cake{
    constructor(flavor,size,shape,price){
        this.flavor = flavor;
        this.size = size;
        this.shape = shape;
        this.price = price;
    }
}

class BakeService{
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/movies';

    static getAllBakes(){
        return $.get(this.url);
    }

    static getBake(id){
        return $.get(this.url + `/${id}`);
    }

    static createBake(bake){
        return $.post(this.url, bake);
    }

    static updateBake(bake){
        return $.ajax({
            url: this.url + `/${bake._id}`,
            dataType: 'json',
            data: JSON.stringify(bake),
            contentType: 'application/json',
            type: 'PUT'
        });
    }
    static deleteBake(id){
        return $.ajax({
            url: this.url +`/${id}`,
            type: 'DELETE'
        });
    }
}

class DOMManager{
    static bakes;

    static getAllBakes(){
        BakeService.getAllBakes().then(bakes => this.render(bakes));
    }

    static render(bakes){
        this.bakes= bakes;
        $('#cakelist').empty();
        for ( let bake of bakes){
            $('#cakelist').prepend(
                `<div id="${bake._id}" class="card">
                <div class="card-header">
                <h2>${bake.name}</h2>
                <button class="btn btn-danger" onclick="DOMManager.delete('${cake._id}')">Rebake It</button>
                </div>
                <div class="card-body">
                <div class="card">
                <div class="row">
                <div class="col-sm">
              <input type="text" id="${bake._id}-cake-flavor" class="form-control" placeholder="Cake Flavor">
                </div>
                <div class="col-sm">
                <input type="text" id="${bake._id}-cake-size" class="form-control" placeholder="Cake Size">
                </div>
                <div class="col-sm">
                <input type="text" id="${bake._id}-cake-shape" class="form-control" placeholder="Cake Shape">
                </div>
                <div class="col-sm">
                <input type="text" id="${bake._id}-cake-flavor" class="form-control" placeholder="Cake Price">
                </div>
                </div>
                <button id="${bake._id}-new-cake" onclick="DOMManager.addCake('${bake._id}')" class=
                </div>
                </div>
                </div>
                ` 
            

            );
        }
    }
}

DOMMAnager.getAllBakes();