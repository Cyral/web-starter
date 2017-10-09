import {h, render, Component} from 'preact';

export interface ContainerProps {

}

export default class Container extends Component<ContainerProps, any> {
    constructor() {
        super();

        this.getData();
    }

    async getData() {
        const request = new Request('/api');
        const response = await fetch(request);
        console.log(await response.json());
    }

    render(props: ContainerProps) {

        return (
            <div class="container">

            </div>
        );
    }
}