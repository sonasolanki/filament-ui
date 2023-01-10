import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FModal } from './f-modal';

describe('f-modal', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FModal],
            template: () => <f-modal></f-modal>
        });
        expect(root).toEqualHtml(`
            <f-modal>
                <div class="f-modal">
                    f-modal
                </div>
            </f-modal>
        `)
    })
})