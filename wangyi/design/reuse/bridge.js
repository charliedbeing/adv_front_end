/**
 * the Bridge pattern to separate the abstraction (the user interface) from the implementation (the document type). 
 * This would allow you to change the document type without affecting the user interface, or to add new document 
 * types without having to modify the existing user interface.
 */
class EditDocument{
    
    constructor(document){
        this.doc = document
    }
    open(){
        this.doc.open()
    }
    save(){
        this.doc.save()
    }
    close(){
        this.doc.close()
    }
}
class WordDoc{
    constructor(doc){
        this.type='text'
        this.file =doc
    }
    open(){

    }
    save(){

    }
    close(){

    }

}
class PDFDoc{
    constructor(doc){
        this.type='pdf'
        this.file =doc
    }
    open(){

    }
    save(){

    }
    close(){
        
    }

}

function test(){
    var workEditor = new EditDocument(new WordDoc())
    var pdfEditor = new EditDocument(new PDFDoc())

    workEditor.open()


}