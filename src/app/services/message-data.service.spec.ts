// import { TestBed, inject } from '@angular/core/testing';
// import { Message } from '../models/message';
// import { MessageDataService } from './message-data.service';

// describe('MessageDataService', () => {
//   const message1 = new Message({title: 'sneezing'});
//   const message2 = new Message({title: 'bless you'});
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MessageDataService]
//     });
//   });

//   it('should be created', inject([MessageDataService], (service: MessageDataService) => {
//     expect(service).toBeTruthy();
//   }));

//   describe('add message ', () => {
// it('should add message to MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
//   service.addMessage(message1);
//   expect(service.getMessageById(1)).toEqual(message1);
// }));
// });
// describe('new messages', () => {
//       it('should automatically assign an incrementing id', inject([MessageDataService], (service: MessageDataService) => {
//         service.addMessage(message1);
//         expect(service.getMessageById(1)).toEqual(message1);
//       }));
//     });
//     describe('updateMessageById', () => {
//           it('should return updated message with the corresponding id', inject([MessageDataService], (service: MessageDataService) => {
//             service.addMessage(message1);
//             const updatedMessage = service.updateMessageById(1, {message: 'new title' });
//             expect(updatedMessage.message).toEqual('new title');
//           }));
//           it('should return null if message is not found', inject([MessageDataService], (service: MessageDataService) => {
//             service.addMessage(message1);
//             const updatedMessage = service.updateMessageById(2, {
//               message: 'new title'
//             });
//             expect(updatedMessage).toEqual(null);
//           }));
//         });
// describe('delete message ', () => {
//   it('should delete message from MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
//     service.addMessage(message1);
//     service.addMessage(message2);
//     service.deleteMessageById(1);
//     expect(service.messages.length === 1);
//   }));
//   });
//   describe('get all messages ', () => {
//     it('should return all message in MessageDataSevice', inject([MessageDataService], (service: MessageDataService) => {
//       service.addMessage(message1);
//       service.addMessage(message2);
//       expect(service.getAllMessages()).toEqual([message1, message2]);
//     }));
// });

// });
