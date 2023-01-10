import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FCheckbox } from './f-checkbox';

describe('f-checkbox', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FCheckbox],
            template: () => <f-checkbox></f-checkbox>
        });
        expect(root).toEqualHtml(`
            <f-checkbox>
                <div class="f-checkbox">
                    f-checkbox
                </div>
            </f-checkbox>
        `)
    })
})