class CakeEntryForm {
    constructor(submitCallback) {
        this.submitCallback = submitCallback;
    }

    renderForm(parentNode) {
        let formContainer = document.createElement('div');
        let formGroup = document.createElement('div');
        formGroup.setAttribute('class', 'form-group');

        // Cake flavor
        let flavorLabel = document.createElement('label');
        flavorLabel.setAttribute('for', 'cakeFlavor');
        let flavorInput = document.createElement('input');
        flavorInput.setAttribute('id', 'cakeFlavor');
        flavorInput.setAttribute('type', 'text');
        flavorInput.setAttribute('class', 'form-control');
        flavorInput.setAttribute('placeholder', 'Flavor');

        // Cake size
        let sizeLabel = document.createElement('label');
        sizeLabel.setAttribute('for', 'cakeSize');
        let sizeInput = document.createElement('input');
        sizeInput.setAttribute('id', 'cakeSize');
        sizeInput.setAttribute('type', 'text');
        sizeInput.setAttribute('class', 'form-control');
        sizeInput.setAttribute('placeholder', 'Size');

        // Cake shape
        let shapeLabel = document.createElement('label');
        shapeLabel.setAttribute('for', 'cakeShape');
        let shapeInput = document.createElement('input');
        shapeInput.setAttribute('id', 'cakeShape');
        shapeInput.setAttribute('type', 'text');
        shapeInput.setAttribute('class', 'form-control');
        shapeInput.setAttribute('placeholder', 'Shape');

        // Cake Price... to know how much money will make then lol
        let priceLabel = document.createElement('label');
        priceLabel.setAttribute('for', 'cakePrice');
        let priceInput = document.createElement('input');
        priceInput.setAttribute('id', 'cakePrice');
        priceInput.setAttribute('type', 'text');
        priceInput.setAttribute('class', 'form-control');
        priceInput.setAttribute('placeholder', 'Cake Price');

        // Entry button
        let entryButton = document.createElement('button');
        entryButton.setAttribute('class', 'btn btn-primary');
        entryButton.innerHTML = 'Enter Cake';

        // Hook up event handler to tell parent about event
        entryButton.addEventListener('click', () => {
            // collect our data and give it to the callback
            let cakeSummary = {
                flavor: flavorInput.value,
                size: sizeInput.value,
                shape: shapeInput.value,
                price: priceInput.value
            }

            this.submitCallback(cakeSummary);
        });

        // Assemble and render on parent node
        formGroup.appendChild(sizeLabel);
        formGroup.appendChild(sizeInput);
        formGroup.appendChild(flavorLabel);
        formGroup.appendChild(flavorInput);
        formGroup.appendChild(shapeLabel);
        formGroup.appendChild(shapeInput);
        formGroup.appendChild(priceLabel);
        formGroup.appendChild(priceInput);

        formContainer.appendChild(formGroup);
        formContainer.appendChild(entryButton);
        parentNode.appendChild(formContainer);
    }
} 