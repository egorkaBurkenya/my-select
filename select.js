export default class MySelect extends HTMLElement {
    connectedCallback() {

        // * Get options

        var options;
        if(this.hasAttribute('options')) {
            options = this.getAttribute('options').replace(/\s/g, '').split(',');
            console.log(options)
        } else {
            options = ['value'];
        }
        var defaultOption;
        if(this.hasAttribute('default')) {
            defaultOption = this.getAttribute('default');
        } else {
            defaultOption = ['defaultOption'];
        }

        var width;
        if(this.hasAttribute('width')) {
            width = this.getAttribute('width');
        } else {
            width = ['10em'];
        }

        // * Create Select

        const select = document.createElement('div');
        select.style.width = width
        const choseOption = document.createElement('p');
        choseOption.innerText = defaultOption
        select.appendChild(choseOption)

        let display = false;
        choseOption.addEventListener('click', (e) => {
            e.preventDefault();
            display = !display
            if (display) {
                choseOption.style.border = 'none';
                choseOption.style.borderTop = '1px solid black';
                choseOption.style.borderLeft = '1px solid black';
                choseOption.style.borderRight = '1px solid black';
                choseOption.style.borderRadius = '0.5em 0.5em 0 0 ';
            } else {
                choseOption.style.border = '1px solid black';
                choseOption.style.borderRadius = '0.5em';
            }

            ul.style.display = display ? 'block' : 'none';      
        })

        // * Add options into select

        const ul = document.createElement('ul');
        ul.style.display = 'none';    
        
        const addEvent = (option, op) => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                choseOption.innerText = op
                addOptions()
            })
            return option
        }

        const addOptions = () => {
            ul.innerHTML = '';
            for (var i in options) {
            const option = document.createElement('li');
            option.innerText = options[i]
            if (options[i] == choseOption.innerText){
                option.classList.add('active')
            }

            addEvent(option, options[i])
            
            ul.appendChild(option)
        }}
        addOptions()
        select.append(ul)
        this.append(select);
        
        
    };
};