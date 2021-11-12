import {ListDom} from './mocks/dummyAddItem.js';
import {trashDom} from './mocks/dummyDeleteItem.js';
import { EditDom } from './mocks/dummyEdit.js';
import { checkedDom } from './mocks/dummyRemoveChecked.js';
import { UpdateDom } from './mocks/dummyUpdateStatus.js';
import Tasks from './functionalities.js';
import MockStorage from './mocks/dummystorage';

let task = {
    index:1,
    complete:false,
    description:'eat'
   };

describe('should add item',()=>{
    const list  = ListDom.window.document.getElementById('list')
      Tasks.createElement(task,list);
    test('create one list Item',()=>{
        expect(list.childElementCount).toBe(1);
    });

    test('should save one Item to local storage at a time',()=>{
        let data = [];
        data.push(task);
        let storage = new MockStorage();
        storage.setItem('list',data);
        let result = storage.getItem('list');
        expect(result.length).toBe(1);
    });
});


describe('should remove Item',()=>{
test('should remove item from local storage',()=>{
   let index = 0;
   let storage = new MockStorage();
   let data = [];
   data.push(task)
   storage.setItem('list',data);
   const arr = storage.getItem('list');
 Tasks.removeToLocalStorage(arr,index);
expect(arr.length).toBe(0)
});

test('should delete Item form the browser',()=>{
    let trash = trashDom.window.document.getElementById('trash'); 
   expect(Tasks.removeElementDom(trash)).toBeUndefined();
});
});

describe('should edit Item',()=>{
    test('should edit Item from local storage',()=>{
   let index = 0;
   let storage = new MockStorage();
   let data = [];
   data.push(task)
   storage.setItem('list',data);
   const arr = storage.getItem('list');
   let text = 'Hello world';
   const result = Tasks.editeTextAreaDom(arr,index,text);
   expect(result).toBe('Hello world')
    });
 test('should Edit Item in the browser',()=>{
     const inputValue = EditDom.window.document.getElementById('edit').value;
     let index = 0;
     let storage = new MockStorage();
     let data = [];
     data.push(task);
     storage.setItem('list',data);
     const arr = storage.getItem('list');
    expect(Tasks.editeTextAreaDom(arr,index,inputValue)).toBe('hello')
 });
});


test('should update complete status in local storage',()=>{
    const checkbox = UpdateDom.window.document.getElementById("0");
    let storage = new MockStorage();
    let data = [];
    data.push(task);
    storage.setItem('list',data);
    const id = 0;
    checkbox.click((e)=>{
        Tasks.completeStatus(id,e);
        expect( Tasks.localData()[id].complete).toBeTruthy();
    })
});
 



