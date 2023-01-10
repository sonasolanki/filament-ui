import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FLozenge } from './f-lozenge';

describe('f-lozenge', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FLozenge],
            template: () => <f-lozenge></f-lozenge>
        });
        expect(root).toEqualHtml(`
            <f-lozenge>
                
                    <div class="f-lozenge">
                        f-lozenge
                    </div>
                
            </f-lozenge>
        `)
    })
})