import { Pipe, PipeTransform } from '@angular/core';

/**
 * This Pipe removes spaces and replaced it with hyphen (-)
 */
@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  /**
   * Method which accepts value and return replaced value
   * @param value - Takes value of spaces to be removed
   * @returns Returns changed value
   */
  transform(value: any): string {
    return value.replace(/[\s/\\%=]/g, '-');
  }
}
