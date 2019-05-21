import { observable } from 'mobx'

export default class UserStore {
	@observable list = [
	   {
         id: 1,
         email: 'some@mail.com',
       },
       {
         id: 2,
         email: 'some@mail.com',
       },
       {
         id: 3,
         email: 'another@mail.com',
       },
       {
         id: 4,
         email: 'random@mail.com',
       },
       {
         id: 5,
         email: 'example@email.com',
       },
	]
	
	@observable detail = {
		id: 5,
		email: 'c@c.com',
	}
	
	fetchAll () {
		this.list.push({
			id:Math.random(),
			email:'c@c.com',
		})
	}
}
