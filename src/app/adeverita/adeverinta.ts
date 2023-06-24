class student {
  email!:String;
  nume!:String;
  facultate!:String;
  specializare!:String;
  cursuri!:String;
  an!:String;

}

class NrAdv{
  id!:String;
}

export class Adeverinta{
  numar!:String;
  nume!:String;
  motiv!:String;
  mentiuni!:String;
  status!:String;
  student!:student;
}
