import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {
      UserID: 1,
      UserTypeID: 2,
      UserName: 'Shammas',
      Password: 'Shammas',
      Contactnumber: 97384757485,
      Email: 'Shammas@gmail.com',
      SubscriptionStatusid: 1,
      SubscriptionStatus: 'Lite', 
      Status:true,
    },
    {
      UserID: 2,
      UserTypeID: 2,
      UserName: 'Fazil',
      Password: 'Fazil',
      Contactnumber: 97384732485,
      Email: 'Fazil@gmail.com',
      SubscriptionStatusid: 3,
      SubscriptionStatus: 'Gold', 
      Status:true,
    },
    {
      UserID: 3,
      UserTypeID: 1,
      UserName: 'Afsal', 
      Password: 'Afsal',
      Contactnumber: 97332757485,
      Email: 'Afsal@gmail.com',
      SubscriptionStatusid: 2,
      SubscriptionStatus: 'Platinum',
      Status:true,
    },
    {
      UserID: 4,
      UserTypeID: 2,
      UserName: 'Junaid',
      Password: 'Junaid',
      Contactnumber: 97310757485,
      Email: 'Junaid@gmail.com',
      SubscriptionStatusid: 3,
      SubscriptionStatus: 'Gold', 
      Status:true,
    },
    {
      UserID: 5,
      UserTypeID: 2,
      UserName: 'Shamnad',
      Password: 'Shamnad',
      Contactnumber: 9739757485,
      Email: 'Shamnad@gmail.com',
      SubscriptionStatusid: 2,
      SubscriptionStatus: 'Platinum', 
      Status:true,
    },
    {
      UserID: 6,
      UserTypeID: 2,
      UserName: 'Muhammed',
      Password: 'Muhammed',
      Contactnumber: 97354757485,
      Email: 'Muhammed@gmail.com',
      SubscriptionStatusid: 3,
      SubscriptionStatus: 'Gold', 
      Status:true,
    },
    {
      UserID: 7,
      UserTypeID: 2,
      UserName: 'Naseef',
      Password: 'Naseef',
      Contactnumber: 9738755485,
      Email: 'Naseef@gmail.com',
      SubscriptionStatusid: 3,
      SubscriptionStatus: 'Gold', 
      Status:true,
    },
    {
      UserID: 8,
      UserTypeID: 2,
      UserName: 'Zamil',
      Password: 'Zamil',
      Contactnumber: 97384757485,
      Email: 'Zamil@gmail.com',
      SubscriptionStatusid: 2,
      SubscriptionStatus: 'Platinum', 
      Status:true,
    },
    {
      UserID: 9,
      UserTypeID: 2,
      UserName: 'Sam son',
      Password: 'samson',
      Contactnumber: 97384886485,
      Email: 'Sam@gmail.com',
      SubscriptionStatusid: 1,
      SubscriptionStatus: 'Lite', 
      Status:true,
    },
    {
      UserID: 10,
      UserTypeID: 2,
      UserName: 'Dhoni',
      Password: 'Dhoni',
      Contactnumber: 9738332113,
      Email: 'dhoni@gmail.com',
      SubscriptionStatusid: 3,
      SubscriptionStatus: 'Gold', 
      Status:false,
    },
    {
      UserID: 11,
      UserTypeID: 2,
      UserName: 'Subair',
      Password: 'Subair',
      Contactnumber: 9738332113,
      Email: 'Subair@gmail.com',
      SubscriptionStatusid: 1,
      SubscriptionStatus: 'Lite', 
      Status:false,
    },
    {
      UserID: 12,
      UserTypeID: 2,
      UserName: 'Manaf',
      Password: 'Manaf',
      Contactnumber: 9738332113,
      Email: 'Manaf@gmail.com',
      SubscriptionStatusid: 2,
      SubscriptionStatus: 'Platinum', 
      Status:true,
    },
  ];
  constructor() { }

  GetAllUserData() {
    return this.users;
  }
}
