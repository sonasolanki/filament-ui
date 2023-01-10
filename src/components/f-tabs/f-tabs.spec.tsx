import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FTabs } from './f-tabs';

describe('f-tabs', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FTabs],
            template: () => <f-tabs></f-tabs>
        });
        expect(root).toEqualHtml(`
            <f-tabs>
                
                    <div class="f-tabs">
                        f-tabs
                    </div>
                
            </f-tabs>
        `)
    })
})