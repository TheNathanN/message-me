export interface Sender {
  uid: string;
  displayName: string;
  photoURL: string;
}

export interface Message {
  id: string;
  message: string;
  sender: Sender;
  time: Date;
}
