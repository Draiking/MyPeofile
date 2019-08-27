import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'postsPipe'
})

export class PostsPipe implements PipeTransform {

    transform(value: any, type: string): any {
        if (!type || type === 'all') {
            return value;
        }
        return value.filter((post) => {
            return post.type === type;
        });
    }

}
