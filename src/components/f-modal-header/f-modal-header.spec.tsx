import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FModalHeader } from './f-modal-header';

describe('f-modal-header', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FModalHeader],
            template: () => <f-modal-header></f-modal-header>
        });
        expect(root).toEqualHtml(`
            <f-modal-header>
                <div class="f-modal-header">
                    f-modal-header
                </div>
            </f-modal-header>
        `)
    })
})