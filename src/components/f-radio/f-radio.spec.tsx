import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FRadio } from './f-radio';

describe('f-radio', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FRadio],
            template: () => <f-radio></f-radio>
        });
        expect(root).toEqualHtml(`
            <f-radio>
                <div class="f-radio">
                    f-radio
                </div>
            </f-radio>
        `)
    })
})