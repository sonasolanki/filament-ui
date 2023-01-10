import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FCheckboxGroup } from './f-checkbox-group';

describe('f-checkbox-group', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FCheckboxGroup],
            template: () => <f-checkbox-group></f-checkbox-group>
        });
        expect(root).toEqualHtml(`
            <f-checkbox-group>
                <div class="f-checkbox-group">
                    f-checkbox-group
                </div>
            </f-checkbox-group>
        `)
    })
})