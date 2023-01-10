import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FDropdown } from './f-dropdown';

describe('f-dropdown', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FDropdown],
            template: () => <f-dropdown></f-dropdown>
        });
        expect(root).toEqualHtml(`
            <f-dropdown>
                <div class="f-dropdown">
                    f-dropdown
                </div>
            </f-dropdown>
        `)
    })
})