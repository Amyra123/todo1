const addButton = document.querySelector('.addButton');
const addTask = document.querySelector('.addTask');
var modal = document.getElementById('modal');
var btn = document.getElementById('btn');
const b = document.getElementsByClassName('box2')[0];

var close = document.getElementsByClassName('btnc')[0];
var add = document.getElementsByClassName('btna')[0];

var input = document.querySelector('.newtask');
var pophead = document.getElementById('pophead');



class item{

          constructor(x,task1) {
                    this.createDiv(x,task1)
          }

          createDiv(x,task1) {

                    let box = document.createElement('div');
                    box.classList.add('task')

                    let del = document.createElement('input');
                    del.type = "checkbox";
                    del.classList.add('in');

                    let lab = document.createElement('label');
                    lab.innerHTML = task1;
                    lab.classList.add('label');

                    box.appendChild(del);
                    box.appendChild(lab);

                    x.appendChild(box);
          }
}
class list1{
          constructor(list_head) {
                    this.createDiv(list_head);
          }

          createDiv(list_head)
          {
                    let head = document.createElement('h4');
                    head.innerHTML = list_head;
                    head.classList.add('heading');

                    let listBox = document.createElement('div');
                    listBox.classList.add('list');

                    let addition = document.createElement('div');
                    addition.classList.add('flexer');

                    let taskButton = document.createElement('button');
                    taskButton.classList.add('addTask');
                    taskButton.innerHTML = `<i class="fas fa-plus"></i>`;



                    let removeButton = document.createElement('button');
                    removeButton.classList.add('remove');
                    removeButton.innerHTML = "REMOVE";

                    let bottom = document.createElement('div');
                    bottom.classList.add('lowerb');
                    

                    bottom.appendChild(taskButton);
                    bottom.appendChild(removeButton);

                    b.appendChild(listBox);
                    listBox.appendChild(head);
                    listBox.appendChild(addition);

                    removeButton.onclick = function () {
                              b.removeChild(listBox);
                    }

                    taskButton.onclick = function () {
                              pophead.innerHTML = "ADD NEW TASK";
                              modal.style.display = "block";
                    

                              add.onclick = function () {

                                        if (pophead.innerHTML == "ADD NEW LIST" && input.value!="") {
                                                  var x = input.value;
                                                  modal.style.display = "none";
                                                  new list1(x);
                                                  input.value = "";
                                        }

                                        else if(pophead.innerHTML == "ADD NEW TASK" && input.value!="") {
                                        
                                                  var x = input.value;
                                                  modal.style.display = "none";
                                                  new item(addition, x);
                                                  modal.style.display = "none";
                                                  input.value = "";
                                        }

                              }

                    }

                    listBox.appendChild(bottom);
                    

          }
     
}


btn.onclick = function () {
          pophead.innerHTML = "ADD NEW LIST";
          modal.style.display = "block";
          //new list1("xyz");
}

close.onclick = function () {
          input.value = "";
          modal.style.display = "none";
}

add.onclick = function () {
          if (pophead.innerHTML == "ADD NEW LIST" && input.value!="") {
                    var x = input.value;
                    modal.style.display = "none";
                    new list1(x);
                    input.value = "";
          }
}




