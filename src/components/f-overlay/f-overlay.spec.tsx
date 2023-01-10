import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FOverlay } from './f-overlay';

describe('f-overlay', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FOverlay],
            template: () => <f-overlay></f-overlay>
        });
        expect(root).toEqualHtml(`
            <f-overlay>
                <div class="f-overlay">
                    f-overlay
                </div>
            </f-overlay>
        `)
    })
})