import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FAvatar } from './f-avatar';

describe('f-avatar', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FAvatar],
            template: () => <f-avatar></f-avatar>
        });
        expect(root).toEqualHtml(`
            <f-avatar>
                <div class="f-avatar">
                    f-avatar
                </div>
            </f-avatar>
        `)
    })
})