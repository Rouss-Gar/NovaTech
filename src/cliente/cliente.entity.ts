enum Clientestatus
{
    Pending= 'Pending',
    In_Progress = 'In_Progress',
    Done = 'Done',
}

export class Cliente 
    {
        id : Int16Array
        nombre : string
        direccion : string
        telefono : Int16Array
        correoelectronico : string
    }

