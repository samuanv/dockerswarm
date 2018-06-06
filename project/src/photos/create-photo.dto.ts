import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;

  user: string;
  readonly mimetype: string;
  }