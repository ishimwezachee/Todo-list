import { JSDOM } from 'jsdom';
export const UpdateDom = new JSDOM(`<li class="list-item"><div><input type="checkbox" id="0" class="check"/></div></li>`);
global.document = UpdateDom.window.document;
global.window = UpdateDom.window;



