import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FTextarea } from './f-textarea';

describe('f-textarea', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FTextarea],
            template: () => <f-textarea></f-textarea>
        });
        expect(root).toEqualHtml(`
            <f-textarea>
                <div class="f-textarea">
                    f-textarea
                </div>
            </f-textarea>
        `)
    })
})