import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FLoading } from './f-loading';

describe('f-loading', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FLoading],
            template: () => <f-loading></f-loading>
        });
        expect(root).toEqualHtml(`
            <f-loading>
                
                    <div class="f-loading">
                        f-loading
                    </div>
                
            </f-loading>
        `)
    })
})