class Cake {
    constructor(flavor,size,shape,price){
        this.flavor = flavor;
        this.size = size;
        this.shape = shape;
        this.price = price;
    }

    renderCake(parentNode){
      
    let cakeContainer = document.createElement('div');
    cakeContainer.setAttribute('class', 'cake-container');
    let flavorElmt = document.createElement('p');
    flavorElmt.innerHTML = this.flavor;
    let sizeElmt = document.createElement('p');
    sizeElmt.innerHTML = this.size;
    let shapeElmt = document.createElement('p');
    shapeElmt.innerHTML = this.shape;
    let priceElmt = document.createElement('p');
    priceElmt.innerHTML = this.price;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete Cake';
    deleteButton.setAttribute('class', 'btn btn-danger cake-delete');

    deleteButton.addEventListener('click', () => {
        cakeContainer.remove();

    });

    cakeContainer.appendChild(flavorElmt);
    cakeContainer.appendChild(sizeElmt);
    cakeContainer.appendChild(shapeElmt);
    cakeContainer.appendChild(priceElmt);
    cakeContainer.appendChild(deleteButton);

    parentNode.appendChild(cakeContainer);
    }
}