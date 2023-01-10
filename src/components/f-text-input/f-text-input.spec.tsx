import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FTextInput } from './f-text-input';

describe('f-text-input', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FTextInput],
            template: () => <f-text-input></f-text-input>
        });
        expect(root).toEqualHtml(`
            <f-text-input>
                
                    <div class="f-text-input">
                        f-text-input
                    </div>
                
            </f-text-input>
        `)
    })
})