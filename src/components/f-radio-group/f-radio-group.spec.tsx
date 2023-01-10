import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FRadioGroup } from './f-radio-group';

describe('f-radio-group', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FRadioGroup],
            template: () => <f-radio-group></f-radio-group>
        });
        expect(root).toEqualHtml(`
            <f-radio-group>
                <div class="f-radio-group">
                    f-radio-group
                </div>
            </f-radio-group>
        `)
    })
})