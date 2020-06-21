import { Component, OnInit, Input, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, 
  AfterViewInit,
  AfterContentChecked,
  OnDestroy
{

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('postHtml', { static: true }) postHtml: ElementRef

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  constructor() {
    console.log('Первым этапом формирования компонента является метод конструктор, но делать в нем какую-то логику крайне не рекомендуется')
   }

  ngOnChanges(changes: SimpleChanges): void { 
    console.log('ngOnChanges - инициализация параметров и изменений', changes)
  }

  ngOnInit() {
    console.log('ngOnInit - инициализируем компонент и начинается все программирование')
    console.log(this.postHtml.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - начинает действовать во время каких-то изменений')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - вызывается когда передается какой-то контент внутрь компонента')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChacked - вызывается тогда, когда весь контент готов к использованию')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - инициализируются те элементы, которые находятся в самом компоненте')
  }

  ngAfterVievChecked(): void {
    console.log('ngAfterVievChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
