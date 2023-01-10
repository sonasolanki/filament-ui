import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FModalButtonBar } from './f-modal-button-bar';

describe('f-modal-button-bar', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FModalButtonBar],
            template: () => <f-modal-button-bar></f-modal-button-bar>
        });
        expect(root).toEqualHtml(`
            <f-modal-button-bar>
                <div class="f-modal-button-bar">
                    f-modal-button-bar
                </div>
            </f-modal-button-bar>
        `)
    })
})