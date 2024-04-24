let items = []; // khai báo 1 mảng rỗng 

const itemsDiv = document.getElementById("items") // lấy bên HTML id là items gắn vào itemsDiv
const input = document.getElementById("itemInput") // lấy bên HTML id là itemInput gắn vào input
const storageKey = "items" //khai báo storageKey và gán giá trị là "items" sử dụng để lưu trữ và truy xuất dữ liệu từ localStorage.

function renderItems(){
    itemsDiv.innerHTML = null; // gắn rỗng đảm bảo rằng mỗi lần hàm này được gọi, nội dung bên trong phần tử itemsDiv sẽ được xóa đi

    for(const [idx, item] of Object.entries(items)){ // Duyệt qua từng phần tử trong mảng items bằng cách sử dụng phương thức Object.entries() idx: vị trí, item:giá trị
        const container = document.createElement("div") // Tạo một phần tử <div> mới và gán vào biến container
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p") //Tạo phần tử văn bản mới và gán vào biến text.
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button") // Tạo phần tử nút (<button>) mới và gán vào biến button.
        button.textContent = "Delete" //Gán nội dung của nút là "Delete".
        button.onclick = () => removeItems(idx) //Gán sự kiện onclick cho nút, khi nút được nhấn, hàm removeItems(idx) sẽ được gọi để xóa mục tại chỉ số idx.

        container.appendChild(text) //Thêm phần tử văn bản (text) vào phần tử container.
        container.appendChild(button) //Thêm nút xóa (button) vào phần tử container.

        itemsDiv.appendChild(container) //Thêm phần tử container (chứa văn bản và nút xóa) vào phần tử có id là itemsDiv, để hiển thị trên trang web.
    }
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems(){
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function addItems(){
    const value = input.value
    if (!value){
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItems(idx){
    items.splice(idx, 1) 
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)