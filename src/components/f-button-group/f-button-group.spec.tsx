import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FButtonGroup } from './f-button-group';

describe('f-button-group', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FButtonGroup],
            template: () => <f-button-group></f-button-group>
        });
        expect(root).toEqualHtml(`
            <f-button-group>
                <div class="f-button-group">
                    f-button-group
                </div>
            </f-button-group>
        `)
    })
})