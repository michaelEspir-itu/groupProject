let rootNode = document.getElementById('cakelistApp');

 let cakeForm = new CakeEntryForm((cakeSummary) => {
     let cake = new Cake(cakeSummary.size, 
                         cakeSummary.flavor, 
                         cakeSummary.shape, 
                         cakeSummary.price);

     cake.renderCake(rootNode);
 });

 cakeForm.renderForm(rootNode);
