export enum NoteStatus{
    CREATE = 'create',
    EDIT = 'edit'
}

export class NoteModel{
    public id: string;
    public text: string;
    public creationDate: string;
    public status: NoteStatus;
    public creator: string;

    constructor(data: any){
        this.id = new Date().getTime().toString();
        this.creationDate = new Date().toUTCString();
        this.status = NoteStatus.CREATE;
        this.creator = 'you';
        this.text = data.text || '';
    }
}