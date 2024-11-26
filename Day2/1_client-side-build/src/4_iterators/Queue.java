import java.util.Iterator;
import java.util.NoSuchElementException;

public class Queue<T> implements Iterable<T> {
    private T[] items;
    private int front, rear, count, capacity;

    @SuppressWarnings("unchecked")
    public Queue(int capacity) {
        items = (T[]) new Object[capacity];
        this.capacity = capacity;
        front = 0;
        rear = -1;
        count = 0;
    }

    public void enqueue(T item) {
        if (count == capacity) {
            throw new IllegalStateException("Queue is full");
        }
        rear = (rear + 1) % capacity;
        items[rear] = item;
        count++;
    }

    public T dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        T item = items[front];
        front = (front + 1) % capacity;
        count--;
        return item;
    }

    public boolean isEmpty() {
        return count == 0;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>() {
            private int currentIndex = front;
            private int itemsReturned = 0;

            @Override
            public boolean hasNext() {
                return itemsReturned < count;
            }

            @Override
            public T next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                }
                T item = items[currentIndex];
                currentIndex = (currentIndex + 1) % capacity;
                itemsReturned++;
                return item;
            }
        };
    }
}
