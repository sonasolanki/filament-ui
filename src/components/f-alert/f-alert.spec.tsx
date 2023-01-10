import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FAlert } from './f-alert';

describe('f-alert', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FAlert],
            template: () => <f-alert></f-alert>
        });
        expect(root).toEqualHtml(`
            <f-alert>
                
                    <div class="f-alert">
                        f-alert
                    </div>
                
            </f-alert>
        `)
    })
})