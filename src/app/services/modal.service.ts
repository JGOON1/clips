import { Injectable } from '@angular/core';


interface IModal{
id: string;
visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []


  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  isModalOpen(id: string) : boolean {
    //? optional chaining if it doesn't return it stops
    //!! negation convert type of value boolean data will hold opposite, true remains true false mean false
    Boolean(this.modals.find(element => element.id === id )?.visible)
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id )
    if(modal) {
      modal.visible = !modal.visible
    }
    // this.visible = !this.visible
  }
}
