using System;
using System.Collections;
using System.Collections.Generic;

public class Queue<T> : IEnumerable<T>
{
    private T[] _items;
    private int _front;
    private int _rear;
    private int _count;
    private int _capacity;

    public Queue(int capacity)
    {
        _capacity = capacity;
        _items = new T[_capacity];
        _front = 0;
        _rear = -1;
        _count = 0;
    }

    public void Enqueue(T item)
    {
        if (_count == _capacity)
        {
            throw new InvalidOperationException("Queue is full");
        }
        _rear = (_rear + 1) % _capacity;
        _items[_rear] = item;
        _count++;
    }

    public T Dequeue()
    {
        if (IsEmpty)
        {
            throw new InvalidOperationException("Queue is empty");
        }
        T item = _items[_front];
        _front = (_front + 1) % _capacity;
        _count--;
        return item;
    }

    public bool IsEmpty => _count == 0;

    public IEnumerator<T> GetEnumerator()
    {
        int current = _front;
        int counter = 0;

        while (counter < _count)
        {
            yield return _items[current];
            current = (current + 1) % _capacity;
            counter++;
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
