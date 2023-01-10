import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FOverflowMenu } from './f-overflow-menu';

describe('f-overflow-menu', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FOverflowMenu],
            template: () => <f-overflow-menu></f-overflow-menu>
        });
        expect(root).toEqualHtml(`
            <f-overflow-menu>
                <div class="f-overflow-menu">
                    f-overflow-menu
                </div>
            </f-overflow-menu>
        `)
    })
})