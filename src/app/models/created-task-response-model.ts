export class CreatedTaskResponseModel {
    id?: string = '';
    content?: string = '';
    userId?: string = '';
    constructor(id?: string, content?: string, userId?: string){
        this.id = id;
        this.content = content;
        this.userId = userId;
    }
}
