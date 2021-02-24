let rootNode = document.getElementById('cakelistApp');

 let entryForm = new EntryForm((cakeSummary) => {
     let book = new Book(cakeSummary.size, 
                         cakeSummary.flavor, 
                         cakeSummary.shape, 
                         cakeSummary.price);

     book.renderCake(rootNode);
 });

 entryForm.renderForm(rootNode);