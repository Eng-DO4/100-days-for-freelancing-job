const add = document.querySelector(".classes-to-add");
const remove = document.querySelector(".classes-to-remove");
const current = document.querySelector('.current');
const container = document.querySelector('.classes-list>div');

add.onblur = addClass;
remove.onblur = removeClass;

function addClass (e) {
    if (add.value !== undefined) {
        const tempList = (add.value).split(' ');
        const arrList = tempList.map(e => e.toLowerCase())
        arrList.forEach(oneClass => {
            if (oneClass !== '') {
                if (!(current.classList.contains(oneClass))) {
                    current.classList.add(oneClass);
                    const span = document.createElement('span');
                    span.classList.add(oneClass);
                    span.textContent = oneClass;
                    container.append(span);
                }
            }
        })
    }
}

function removeClass (e) {
    if (remove.value !== undefined) {
        const tempList = (remove.value).split(' ');
        const arrList = tempList.map(e => e.toLowerCase())
        arrList.forEach(oneClass => {
            if (oneClass !== '') {
                if (current.classList.contains(oneClass)) {
                    current.classList.remove(oneClass);
                    document.querySelector(`span.${oneClass}`).remove();
                }
            }
        });
    }
}