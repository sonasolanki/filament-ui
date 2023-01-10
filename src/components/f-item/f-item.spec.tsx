import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FItem } from './f-item';

describe('f-item', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FItem],
            template: () => <f-item></f-item>
        });
        expect(root).toEqualHtml(`
            <f-item>
                
                    <div class="f-item">
                        f-item
                    </div>
                
            </f-item>
        `)
    })
})