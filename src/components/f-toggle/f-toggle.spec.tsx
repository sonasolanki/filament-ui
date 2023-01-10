import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FToggle } from './f-toggle';

describe('f-toggle', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FToggle],
            template: () => <f-toggle></f-toggle>
        });
        expect(root).toEqualHtml(`
            <f-toggle>
                <div class="f-toggle">
                    f-toggle
                </div>
            </f-toggle>
        `)
    })
})