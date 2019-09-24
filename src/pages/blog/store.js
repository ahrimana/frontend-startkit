import { observable } from 'mobx'
import backgroundImage from './cvece.jpg'

export default class BlogStore {
	@observable list = [
	   {
         id: 1,
         title:'nestonesto',
         text:'lorem ipsum',
         date:new Date(),
         background: backgroundImage,
       },
       {
         id: 2,
         title: 'jendvajendva',
         text:'lorem ipsum2',
         date:new Date(),
       },
       {
         id: 3,
         title: 'dvadvatri',
         text:'lorem ipsum3',
         date:new Date(),
       },
       {
         id: 4,
         title: 'tritricetri',
         text:'lorem ipsum4',
         date:new Date(),
       },
       {
         id: 5,
         title: 'cetricetripet',
         text:'lorem ipsum5',
         date:new Date(),
       },
	]
	
	@observable detail = {
		id: 1,
		title: 'Naslov',
		text: 'Text',
	}
}
