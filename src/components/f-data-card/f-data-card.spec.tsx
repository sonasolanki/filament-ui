import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FDataCard } from './f-data-card';

describe('f-data-card', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FDataCard],
            template: () => <f-data-card></f-data-card>
        });
        expect(root).toEqualHtml(`
            <f-data-card>
                
                    <div class="f-data-card">
                        f-data-card
                    </div>
                
            </f-data-card>
        `)
    })
})